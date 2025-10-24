import classNames from "classnames";
import { FC, ReactNode } from "react";

import Avatar from "../Avatar";
import Button from "../Button";
import { ButtonVariantEnum } from "../Button/types";
import Icon from "../Icon";
import Pill from "../Pill";
import { PillSize, PillVariant } from "../Pill/Pill.types";
import { H4, Paragraph } from "../Typography";
import { IBadge, IPersonAction, IPersonCardProps, ITag } from "./types";

const PersonCard: FC<IPersonCardProps> = ({
  person,
  size = "medium",
  onClick,
  onPersonClick,
  onTagClick,
  actions = [],
  showTags = true,
  showSocialLinks = true,
  maxTags = 3,
  maxDescriptionLines = 3,
  className,
  NavLink,
  href,
  target,
  children,
  ...props
}) => {
  const {
    name,
    username,
    avatar,
    about,
    tags = [],
    socialProfiles = {},
    badge,
    role,
    location
  } = person;

  // Helper function to get badge properties
  const getBadgeProps = (badge: IBadge | undefined) => {
    if (!badge) return null;

    return { text: badge.text, variant: badge.variant || PillVariant.PRIMARY };
  };

  const badgeProps = getBadgeProps(badge);

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick(person, e);
    }
  };

  const handleTagClick = (tag: ITag, e: React.MouseEvent) => {
    e.stopPropagation();
    if (onTagClick) {
      onTagClick(tag, e);
    }
  };

  const getSocialIcon = (platform: string): ReactNode => {
    const iconProps = {
      className: "w-4 h-4"
    };

    const iconMapping: Record<string, string> = {
      website: "IconGlobe",
      github: "IconGithub",
      gitlab: "IconGitlab",
      linkedin: "IconLinkedin",
      twitter: "IconTwitter",
      mastodon: "IconMastodon",
      youtube: "IconYoutube",
      codewars: "IconCodewars",
      leetcode: "IconLeetcode",
      stackoverflow: "IconStackoverflow",
      patreon: "IconPatreon",
      hackernews: "IconHackernews",
      reddit: "IconReddit",
      hackerrank: "IconHackerrank",
      exercism: "IconExercism"
    };

    const iconName = iconMapping[platform.toLowerCase()] || "IconGlobe";

    return <Icon iconName={iconName as any} {...iconProps} />;
  };

  const getLineClampClass = (lines: number) => {
    const clampClasses: Record<number, string> = {
      1: "line-clamp-1",
      2: "line-clamp-2",
      3: "line-clamp-3",
      4: "line-clamp-4",
      5: "line-clamp-5",
      6: "line-clamp-6"
    };
    return clampClasses[lines] || "line-clamp-3";
  };

  const getSizeClasses = (size: string) => {
    const sizeClasses: Record<string, string> = {
      small: "p-4",
      medium: "p-6",
      large: "p-8"
    };
    return sizeClasses[size] || sizeClasses["medium"];
  };

  const getAvatarSize = (size: string) => {
    const avatarSizes: Record<string, number> = {
      small: 48,
      medium: 64,
      large: 80
    };
    return avatarSizes[size] || avatarSizes["medium"];
  };

  const cardClasses = classNames(
    "group transition-all duration-200 relative",
    "bg-background border-2 border-border rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-primary/50 max-w-sm w-full mx-auto",
    {
      "cursor-pointer focus:outline-none": onClick || onPersonClick || href
    },
    getSizeClasses(size),
    className
  );

  const renderPersonContent = () => (
    <div className='flex flex-col gap-4'>
      {/* Avatar and Online Status */}
      <div className='relative mx-auto shrink-0'>
        <Avatar src={avatar} alt={name} size={getAvatarSize(size)} />
      </div>

      {/* Name and Badge */}
      <div className='-mt-2 flex flex-col items-center gap-1'>
        <H4 className='text-foreground group-hover:text-primary m-0 text-center transition-colors'>
          {name}
        </H4>
        {badgeProps && (
          <Pill variant={badgeProps.variant} size={PillSize.SMALL}>
            {badgeProps.text}
          </Pill>
        )}
      </div>

      {/* Username */}
      {username && (
        <div className='-mt-2'>
          <span className='text-muted block text-center text-sm'>
            @{username}
          </span>
        </div>
      )}

      {/* Role and Location */}
      {(role || location) && (
        <div className='text-muted -mt-2 text-center text-sm'>
          {role && <span>{role}</span>}
          {role && location && <span> • </span>}
          {location && <span>{location}</span>}
        </div>
      )}

      {/* Description */}
      {about && (
        <Paragraph
          className={classNames(
            "text-foreground/80 m-0 text-center text-sm",
            getLineClampClass(maxDescriptionLines)
          )}
        >
          {about}
        </Paragraph>
      )}

      {/* Social Links */}
      {showSocialLinks && Object.keys(socialProfiles).length > 0 && (
        <div className='flex justify-center gap-2'>
          {Object.entries(socialProfiles)
            .filter(([, url]) => url)
            .slice(0, 5)
            .map(([platform, url]) => (
              <a
                key={platform}
                href={url as string}
                target='_blank'
                rel='noopener noreferrer'
                className='text-muted hover:text-primary text-lg transition-colors'
                onClick={e => e.stopPropagation()}
                title={platform}
              >
                {getSocialIcon(platform)}
              </a>
            ))}
        </div>
      )}

      {/* Tags */}
      {showTags && tags.length > 0 && (
        <div className='flex flex-wrap justify-center gap-2'>
          {tags.slice(0, maxTags).map((tag: ITag, index: number) => (
            <Pill
              key={tag.id || tag.name || index}
              clickable={!!onTagClick}
              onClick={
                onTagClick
                  ? (e: React.MouseEvent) => handleTagClick(tag, e)
                  : undefined
              }
              variant={PillVariant.PRIMARY}
              size={PillSize.SMALL}
            >
              {tag.name}
            </Pill>
          ))}
          {tags.length > maxTags && (
            <Pill variant={PillVariant.SECONDARY} size={PillSize.SMALL}>
              +{tags.length - maxTags}
            </Pill>
          )}
        </div>
      )}

      {/* Actions */}
      {actions.length > 0 && (
        <div className='flex flex-wrap justify-center gap-2'>
          {actions
            .filter((action: IPersonAction) => action.show !== false)
            .map((action: IPersonAction, index: number) => {
              const getButtonVariant = () => {
                switch (action.variant) {
                  case "danger":
                    return ButtonVariantEnum.ERROR;
                  case "outlined":
                    return ButtonVariantEnum.PRIMARY;
                  case "success":
                    return ButtonVariantEnum.PRIMARY;
                  default:
                    return ButtonVariantEnum.PRIMARY;
                }
              };

              const isOutlined = action.variant === "outlined";

              return (
                <Button
                  key={action.label + index}
                  onClick={e => {
                    e.stopPropagation();
                    action.onClick(person, e);
                  }}
                  variant={getButtonVariant()}
                  outlined={isOutlined}
                  disabled={action.disabled}
                  className='text-xs'
                  icon={
                    action.iconName
                      ? {
                          iconName: action.iconName as any,
                          iconPosition: "left" as const
                        }
                      : undefined
                  }
                >
                  {action.label}
                </Button>
              );
            })}
        </div>
      )}

      {/* Custom children */}
      {children && <div className='mt-2'>{children}</div>}
    </div>
  );

  if (NavLink && href) {
    return (
      <NavLink to={href} target={target} className={cardClasses} {...props}>
        {renderPersonContent()}
      </NavLink>
    );
  }

  if (href) {
    return (
      <a href={href} target={target} className={cardClasses} {...props}>
        {renderPersonContent()}
      </a>
    );
  }

  return (
    <div
      className={cardClasses}
      onClick={handleClick}
      role={onClick || onPersonClick ? "button" : undefined}
      tabIndex={onClick || onPersonClick ? 0 : undefined}
      onKeyDown={e => {
        if (
          (onClick || onPersonClick) &&
          (e.key === "Enter" || e.key === " ")
        ) {
          e.preventDefault();
          const mouseEvent = e as unknown as React.MouseEvent;
          handleClick(mouseEvent);
        }
      }}
      {...props}
    >
      {renderPersonContent()}
    </div>
  );
};

export default PersonCard;

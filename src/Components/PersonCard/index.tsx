import classNames from "classnames";
import { FC, ReactNode } from "react";

import Avatar from "../Avatar";
import Button from "../Button";
import { ButtonVariantEnum } from "../Button/types";
import Pill from "../Core/Pill";
import {
  IconCodewars,
  IconExercism,
  IconGithub,
  IconGitlab,
  IconGlobe,
  IconHackernews,
  IconHackerrank,
  IconLeetcode,
  IconLinkedin,
  IconMastodon,
  IconPatreon,
  IconReddit,
  IconStackoverflow,
  IconTwitter,
  IconYoutube
} from "../Icons";
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

    return { text: badge.text, variant: badge.variant || "primary" };
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
      className: "yl:w-4 yl:h-4",
      "aria-hidden": true
    };

    const iconMapping: Record<string, ReactNode> = {
      website: <IconGlobe {...iconProps} />,
      github: <IconGithub {...iconProps} />,
      gitlab: <IconGitlab {...iconProps} />,
      linkedin: <IconLinkedin {...iconProps} />,
      twitter: <IconTwitter {...iconProps} />,
      mastodon: <IconMastodon {...iconProps} />,
      youtube: <IconYoutube {...iconProps} />,
      codewars: <IconCodewars {...iconProps} />,
      leetcode: <IconLeetcode {...iconProps} />,
      stackoverflow: <IconStackoverflow {...iconProps} />,
      patreon: <IconPatreon {...iconProps} />,
      hackernews: <IconHackernews {...iconProps} />,
      reddit: <IconReddit {...iconProps} />,
      hackerrank: <IconHackerrank {...iconProps} />,
      exercism: <IconExercism {...iconProps} />
    };

    return iconMapping[platform.toLowerCase()] || <IconGlobe {...iconProps} />;
  };

  const getLineClampClass = (lines: number) => {
    const clampClasses: Record<number, string> = {
      1: "yl:line-clamp-1",
      2: "yl:line-clamp-2",
      3: "yl:line-clamp-3",
      4: "yl:line-clamp-4",
      5: "yl:line-clamp-5",
      6: "yl:line-clamp-6"
    };
    return clampClasses[lines] || "yl:line-clamp-3";
  };

  const getSizeClasses = (size: string) => {
    const sizeClasses: Record<string, string> = {
      small: "yl:p-4",
      medium: "yl:p-6",
      large: "yl:p-8"
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
    "yl:group yl:transition-all yl:duration-200 yl:relative",
    "yl:bg-background yl:border-2 yl:border-border yl:rounded-lg yl:shadow-sm yl:hover:shadow-md yl:hover:-translate-y-1 yl:hover:border-primary/50 yl:max-w-sm yl:w-full yl:mx-auto",
    {
      "yl:cursor-pointer yl:focus:outline-none":
        onClick || onPersonClick || href
    },
    getSizeClasses(size),
    className
  );

  const renderPersonContent = () => (
    <div className='yl:flex yl:flex-col yl:gap-4'>
      {/* Avatar and Online Status */}
      <div className='yl:relative yl:flex-shrink-0 yl:mx-auto'>
        <Avatar src={avatar} alt={name} size={getAvatarSize(size)} />
      </div>

      {/* Name and Badge */}
      <div className='yl:flex yl:flex-col yl:items-center yl:gap-1 yl:-mt-2'>
        <H4 className='yl:m-0 yl:text-foreground yl:group-hover:text-primary yl:transition-colors yl:text-center'>
          {name}
        </H4>
        {badgeProps && (
          <Pill variant={badgeProps.variant} size='small'>
            {badgeProps.text}
          </Pill>
        )}
      </div>

      {/* Username */}
      {username && (
        <div className='yl:-mt-2'>
          <span className='yl:text-sm yl:text-muted yl:text-center yl:block'>
            @{username}
          </span>
        </div>
      )}

      {/* Role and Location */}
      {(role || location) && (
        <div className='yl:text-sm yl:text-muted yl:text-center yl:-mt-2'>
          {role && <span>{role}</span>}
          {role && location && <span> • </span>}
          {location && <span>{location}</span>}
        </div>
      )}

      {/* Description */}
      {about && (
        <Paragraph
          className={classNames(
            "yl:text-sm yl:text-foreground/80 yl:m-0 yl:text-center",
            getLineClampClass(maxDescriptionLines)
          )}
        >
          {about}
        </Paragraph>
      )}

      {/* Social Links */}
      {showSocialLinks && Object.keys(socialProfiles).length > 0 && (
        <div className='yl:flex yl:gap-2 yl:justify-center'>
          {Object.entries(socialProfiles)
            .filter(([, url]) => url)
            .slice(0, 5)
            .map(([platform, url]) => (
              <a
                key={platform}
                href={url as string}
                target='_blank'
                rel='noopener noreferrer'
                className='yl:text-muted yl:hover:text-primary yl:transition-colors yl:text-lg'
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
        <div className='yl:flex yl:flex-wrap yl:gap-2 yl:justify-center'>
          {tags.slice(0, maxTags).map((tag: ITag, index: number) => (
            <Pill
              key={tag.id || tag.name || index}
              clickable={!!onTagClick}
              onClick={
                onTagClick
                  ? (e: React.MouseEvent) => handleTagClick(tag, e)
                  : undefined
              }
              variant='primary'
              size='small'
            >
              {tag.name}
            </Pill>
          ))}
          {tags.length > maxTags && (
            <Pill variant='secondary' size='small'>
              +{tags.length - maxTags}
            </Pill>
          )}
        </div>
      )}

      {/* Actions */}
      {actions.length > 0 && (
        <div className='yl:flex yl:gap-2 yl:justify-center yl:flex-wrap'>
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
                  className='yl:text-xs'
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
      {children && <div className='yl:mt-2'>{children}</div>}
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

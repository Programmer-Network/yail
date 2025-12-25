import classNames from "classnames";
import { FC, ReactNode } from "react";

import { Avatar } from "../Avatar";
import { Button } from "../Button";
import { ButtonVariantEnum } from "../Button/types";
import { Icon } from "../Icon";
import { Pill } from "../Pill";
import { PillSize, PillVariant } from "../Pill/Pill.types";
import { Paragraph } from "../Typography";
import {
  IBadge,
  IPersonAction,
  IPersonCardProps,
  IPersonCardTag
} from "./types";

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
    location,
    followersCount,
    followingCount
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

  const handleTagClick = (tag: IPersonCardTag, e: React.MouseEvent) => {
    e.stopPropagation();
    if (onTagClick) {
      onTagClick(tag, e);
    }
  };

  const getSocialIcon = (platform: string): ReactNode => {
    const iconProps = {
      className: "yl:w-4 yl:h-4"
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
    "yl:bg-background yl:border yl:border-border yl:rounded-lg yl:shadow-sm yl:hover:shadow-md yl:hover:-translate-y-1 yl:hover:border-primary/50 yl:w-full",
    {
      "yl:cursor-pointer yl:focus:outline-none":
        onClick || onPersonClick || href
    },
    getSizeClasses(size),
    className
  );

  const renderPersonContent = () => (
    <div className='yl:flex yl:h-full yl:flex-col yl:gap-4'>
      {/* Avatar and Name/Username Section */}
      <div className='yl:flex yl:items-start yl:gap-3'>
        {/* Avatar */}
        <div className='yl:relative yl:shrink-0'>
          <Avatar src={avatar} alt={name} size={getAvatarSize(size)} />
        </div>

        {/* Name, Username, Role/Location */}
        <div className='yl:flex yl:min-w-0 yl:flex-1 yl:flex-col'>
          <div className='yl:flex yl:items-center yl:gap-2'>
            <span className='yl:text-base yl:font-semibold yl:text-text yl:truncate yl:transition-colors group-hover:yl:text-primary'>
              {name}
            </span>
            {badgeProps && (
              <Pill variant={badgeProps.variant} size={PillSize.SMALL}>
                {badgeProps.text}
              </Pill>
            )}
          </div>
          {username && (
            <span className='yl:text-muted/70 yl:truncate yl:text-xs'>
              {`@${username}`}
            </span>
          )}
          {(role || location) && (
            <span className='yl:text-muted/50 yl:truncate yl:text-xs'>
              {role}
              {role && location && " · "}
              {location}
            </span>
          )}
          {(followingCount !== undefined || followersCount !== undefined) && (
            <div className='yl:text-muted/50 yl:mt-1 yl:flex yl:items-center yl:gap-2 yl:text-xs'>
              {followingCount !== undefined && (
                <span>
                  <span className='yl:font-medium yl:text-muted/70'>
                    {followingCount}
                  </span>{" "}
                  Following
                </span>
              )}
              {followingCount !== undefined && followersCount !== undefined && (
                <span className='yl:text-muted/30'>•</span>
              )}
              {followersCount !== undefined && (
                <span>
                  <span className='yl:font-medium yl:text-muted/70'>
                    {followersCount}
                  </span>{" "}
                  Followers
                </span>
              )}
            </div>
          )}
          {/* Social Links */}
          {showSocialLinks && Object.keys(socialProfiles).length > 0 && (
            <div className='yl:mt-1.5 yl:flex yl:items-center yl:gap-2'>
              {Object.entries(socialProfiles)
                .filter(([, url]) => url)
                .slice(0, 5)
                .map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url as string}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='yl:text-muted/50 yl:hover:text-primary yl:transition-colors'
                    onClick={e => e.stopPropagation()}
                    title={platform}
                  >
                    {getSocialIcon(platform)}
                  </a>
                ))}
            </div>
          )}
        </div>
      </div>

      {/* Description */}
      {about && (
        <Paragraph
          className={classNames(
            "yl:text-text/80 yl:m-0 yl:text-left yl:text-sm",
            getLineClampClass(maxDescriptionLines)
          )}
        >
          {about}
        </Paragraph>
      )}

      {/* Actions */}
      {actions.length > 0 && (
        <div className='yl:flex yl:flex-wrap yl:justify-start yl:gap-2'>
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

      {/* Tags */}
      <div className='yl:mt-auto yl:flex yl:flex-col yl:gap-3'>
        {showTags && tags.length > 0 && (
          <div className='yl:flex yl:flex-wrap yl:justify-start yl:gap-1.5'>
            {tags
              .slice(0, maxTags)
              .map((tag: IPersonCardTag, index: number) => (
                <Pill
                  key={tag.id || tag.name || index}
                  clickable={!!onTagClick}
                  onClick={
                    onTagClick
                      ? (e: React.MouseEvent) => handleTagClick(tag, e)
                      : undefined
                  }
                  variant={PillVariant.SECONDARY}
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
      </div>
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

export { PersonCard };

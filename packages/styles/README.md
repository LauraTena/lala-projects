# Sass Public Pages

**Important**: since v2.5.0, if a component is updated, this package needs to be updated in any project where the component is used. Otherwise component colors will look black.

## Main sass config file (to be imported in components)

```
@import '~@frontiers-sass/public-pages/src/config/config';

// Use this for project with sass version lower than 1.33
@import '~@frontiers-sass/public-pages/src/config/config-legacy';
```

## Sass App Files (to be imported in app)

```
@import '~@frontiers-sass/public-pages/src/main';

// Use this for project with sass version lower than 1.33
@import '~@frontiers-sass/public-pages/src/main-legacy';
```

## Enums

### FrontiersIcon

As well, this package provide a enums file related to icon modifier classes. You can import the enums in the following way:

```
import { FrontiersIcon } from '@frontiers-sass/common/src/icons/FrontiersIcon';
```

Definition:

```
enum FrontiersIcon{
  None,
  ArrowRight,
  ArrowLeft,
  Chevrondown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Newsletter,
  Search,
  User,
  Location,
  Institution,
  Twitter,
  Linkedin,
  Instagram,
  Facebook
}
```

### Themes

It contains the list of all themes available for corporate and journal pages.

```
import { Themes } from '@frontiers-sass/common/src/css_vars/Themes';
```

Definition:

```
enum Themes{
    Blue,
    Red,
    Orange,
    Purple,
    Green,
    Cyan
}
```

### Layout

Layout CSS variables will allow us to set sizes depending on the total columns.

```
--layout-col-1, --layout-col-2, --layout-col-3, --layout-col-4 ...
--layout-gap
```

In case we need to add gap to the columns is possible to use calc:

```
width: calc(var(--layout-col-16) + var(--layout-gap));
```

These variables have incorporated the whole logic for responsive, but you will need to define the size when the number of columns changes, for example, for mobile:

```
width: calc(var(--layout-col-2) + var(--layout-gap);
```

These variables can be used in any property, widht, padding, margin (in case you need negative use calc(0 - var(--layout-col-2)))
There is an extra variable to be used mostly in breakpoints biggers than FullHD based in the max-width for main wrapper based in the sass variable $maxWidthPx: 1890;

```
--layout-max-width-px: #{$maxWidthPx};
```

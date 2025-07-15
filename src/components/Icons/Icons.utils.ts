import { ChevronDown } from './svgs/ChevronDown.icon';
import { ChevronLeft } from './svgs/ChevronLeft.icon';
import { ChevronRight } from './svgs/ChevronRight.icon';
import { ChevronUp } from './svgs/ChevronUp.icon';
import { ChevronsUpDown } from './svgs/ChevronsUpDown.icon';
import { Search } from './svgs/Search.icon';

export const ICON_MAP = {
  'chevrons-down': ChevronDown,
  'chevron-up': ChevronUp,
  'chevrons-up-down': ChevronsUpDown,
  'chevron-right': ChevronRight,
  'chevron-left': ChevronLeft,
  search: Search,
} as const;

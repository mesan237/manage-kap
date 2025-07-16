import React from 'react';
import { SvgProps } from 'react-native-svg';
import Home from '@/assets/images/house.svg';
import Account from '@/assets/images/credit-card.svg';
import Profile from '@/assets/images/user.svg';
import Analytics from '@/assets/images/chart-column.svg';
import Plan from '@/assets/images/square-chart-gantt.svg';
import Add from '@/assets/images/plus.svg';
import MoveDown from '@/assets/images/move-down.svg';
import MoveUp from '@/assets/images/move-up.svg';
import Notification from '@/assets/images/bell-ring.svg';
import Calendar from '@/assets/images/calendar-days.svg';
import ChevronLeft from '@/assets/images/chevron-left.svg';
import ChevronRight from '@/assets/images/chevron-right.svg';
import Entertainment from '@/assets/images/film.svg';
import Car from '@/assets/images/car.svg';
import Church from '@/assets/images/church.svg';
import Goals from '@/assets/images/goal.svg';
import Kitchen from '@/assets/images/church.svg';
import Sport from '@/assets/images/volleyball.svg';
import Drink from '@/assets/images/wine.svg';
import Travel from '@/assets/images/plane.svg';
import Phone from '@/assets/images/phone.svg';
import Shopping from '@/assets/images/shopping-cart.svg';
import Electronic from '@/assets/images/unplug.svg';
import Education from '@/assets/images/graduation-cap.svg';
import Health from '@/assets/images/heart-pulse.svg';
import Gift from '@/assets/images/gift.svg';
import Food from '@/assets/images/cooking-pot.svg';
import Salary from '@/assets/images/banknote-arrow-up.svg';
import Tax from '@/assets/images/square-bottom-dashed-scissors.svg';
import House from '@/assets/images/house-wifi.svg';
import Social from '@/assets/images/users-round.svg';
import Other from '@/assets/images/shield-half.svg';

// Define the mapping from string names (stored in DB) to SVG components
const iconMap: { [key: string]: React.FC<SvgProps> } = {
  Home,
  Account,
  Profile,
  Analytics,
  Plan,
  Add,
  MoveDown,
  MoveUp,
  Notification,
  Calendar,
  ChevronRight,
  ChevronLeft,
  Entertainment,
  Car,
  Church,
  Goals,
  Kitchen,
  Sport,
  Drink,
  Travel,
  Phone,
  Shopping,
  Electronic,
  Education,
  Health,
  Gift,
  Food,
  Salary,
  House,
  Social,
  Other,
  Tax,
};

interface DynamicIconProps extends SvgProps {
  name: string;
  color?: string;
  height: number;
  width: number;
  strokeWidth: number;
}

const DynamicIcon: React.FC<DynamicIconProps> = ({ name, ...props }) => {
  // Retrieve the specific SVG component from the map based on the 'name' prop
  const IconComponent = iconMap[name];

  // If the icon name doesn't match any imported SVG, log a warning and return null
  // or a fallback icon.
  if (!IconComponent) {
    console.warn(`DynamicIcon: Icon component for name '${name}' not found.`);
    // You could return a default fallback icon here, e.g.,
    // return <Account {...props} color="gray" />;
    return null;
  }

  // Render the found SVG component, passing all received props to it.
  // This includes width, height, color, strokeWidth, and any NativeWind className props.
  return <IconComponent {...props} />;
};

export default DynamicIcon;

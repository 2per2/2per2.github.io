import { modeWatcher } from '../components/mode-watcher';
import { sidebarExpand, addSnowEffect } from '../components/sidebar';

export function initSidebar() {
  modeWatcher();
  sidebarExpand();
}

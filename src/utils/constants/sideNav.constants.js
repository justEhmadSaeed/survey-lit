import PATH from './routing-paths.constant';
import React from 'react';
import {
	HomeIcon,
	BriefcaseIcon,
	PlusIcon,
	DocumentReportIcon,
	LogoutIcon
} from '@heroicons/react/solid';

const SideNavConst = [
	{
		id: 1,
		icon: <HomeIcon className="dashboard-icon" />,
		content: 'Home',
		link: PATH.HOME,
		active: false
	},
	{
		id: 2,
		icon: <BriefcaseIcon className="dashboard-icon" />,
		content: 'WorkSpace',
		link: PATH.DASHBOARD,
		active: true
	},
	{
		id: 3,
		icon: <PlusIcon className="dashboard-icon" />,
		content: 'Create a Lit Survey',
		link: PATH.CREATE_FORM_ADMIN,
		active: false
	},
	{
		id: 4,
		icon: <DocumentReportIcon className="dashboard-icon" />,
		content: 'Join a Survey',
		link: PATH.JOIN_FORM,
		active: false
	},
	{
		id: 6,
		icon: <LogoutIcon className="dashboard-icon" />,
		content: 'Logout',
		link: PATH.DASHBOARD,
		active: false
	}
];
export default SideNavConst;

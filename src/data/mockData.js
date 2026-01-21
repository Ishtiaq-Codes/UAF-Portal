import { ROLES } from '../context/UserContext';
import { BookOpen, Calendar, Users, FileText, DollarSign, Activity, Upload, ClipboardList, Settings, Home, Bell } from 'lucide-react';

export const DASHBOARD_STATS = {
    [ROLES.ADMIN]: [
        { title: 'Total Students', value: '12,450', icon: Users, change: '+5%', color: 'blue' },
        { title: 'Faculty Members', value: '850', icon: BookOpen, change: '+2%', color: 'green' },
        { title: 'Forms Pending', value: '45', icon: FileText, change: '-10%', color: 'yellow' },
    ],
    [ROLES.FACULTY]: [
        { title: 'Enrolled Students', value: '145', icon: Users, change: '+12%', color: 'blue' },
        { title: 'Classes Today', value: '4', icon: Calendar, change: 'Active', color: 'green' },
        { title: 'Pending Grades', value: '2', icon: FileText, change: 'Due soon', color: 'red' },
    ],
    [ROLES.STUDENT]: [
        { title: 'CGPA', value: '3.85', icon: Activity, change: 'Top 5%', color: 'green' },
        { title: 'Attendance', value: '92%', icon: Users, change: 'Good', color: 'blue' },
        { title: 'Fee Status', value: 'Paid', icon: DollarSign, change: 'Spring 2026', color: 'green' },
    ],
};

export const QUICK_ACTIONS = {
    [ROLES.STUDENT]: [
        { title: 'UG-1 Form', icon: FileText, link: '#' },
        { title: 'Fee Voucher', icon: DollarSign, link: '#' },
        { title: 'Course Materials', icon: BookOpen, link: '#' },
        { title: 'Exam Schedule', icon: Calendar, link: '#' },
    ],
    [ROLES.FACULTY]: [
        { title: 'Upload Content', icon: Upload, link: '#' },
        { title: 'QEC Reports', icon: ClipboardList, link: '#' },
        { title: 'Mark Attendance', icon: Users, link: '#' },
        { title: 'Gradebook', icon: BookOpen, link: '#' },
    ],
    [ROLES.ADMIN]: [
        { title: 'Manage Users', icon: Users, link: '#' },
        { title: 'Approve Forms', icon: FileText, link: '#' },
        { title: 'Generate Reports', icon: Activity, link: '#' },
        { title: 'System Settings', icon: Settings, link: '#' },
    ],
};

export const NOTIFICATIONS = [
    { id: 1, title: 'Fee Deadline Extended', message: 'The deadline for Spring 2026 fee submission is now Jan 25th.', time: '2h ago', isRead: false },
    { id: 2, title: 'New Event: Science Fair', message: 'Register for the annual Science Fair by Friday.', time: '5h ago', isRead: true },
    { id: 3, title: 'System Maintenance', message: 'Dashboard will be down for maintenance on Sunday 2AM-4AM.', time: '1d ago', isRead: true },
];

export const EVENTS = [
    { id: 1, title: 'Mid Term Exams', date: 'Feb 10, 2026', type: 'Exam' },
    { id: 2, title: 'Sports Week Opening', date: 'Mar 05, 2026', type: 'Event' },
    { id: 3, title: 'Result Announcement', date: 'Mar 20, 2026', type: 'Academic' },
];

export const ACTIVITY_FEED = [
    { id: 1, user: 'Ali Khan', action: 'submitted', target: 'UG-1 Form', time: '10 mins ago' },
    { id: 2, user: 'Dr. Sarah', action: 'uploaded', target: 'CS-101 Lecture Notes', time: '1 hour ago' },
    { id: 3, user: 'Admin', action: 'approved', target: 'Scholarship Applications', time: '2 hours ago' },
];

export const NAV_LINKS = [
    { name: 'Dashboard', icon: Home, path: '/' },
    { name: 'Courses', icon: BookOpen, path: '/courses' },
    { name: 'Forms', icon: FileText, path: '/forms' },
    { name: 'Fees', icon: DollarSign, path: '/fees' },
    { name: 'QEC', icon: ClipboardList, path: '/qec' },
    { name: 'Profile', icon: Users, path: '/profile' },
];

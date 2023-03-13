import classNames from "classnames";
// custom imports
import {
  GraduationCap,
  ClipBoardListCheck,
  Laptop,
  ProfileIcon,
  EditProfileIcon,
  EmailIcon,
  WalletIcon,
  QuizMenuIcon,
  HomeMenuIcon,
  TeacherMenuIcon,
  StudentMenuIcon,
  WalletMenuIcon,
  ContactMenuIcon,
} from "shared/components/icons";

export const clx = classNames;

export const studentMenus = [
  {
    label: "On Demand",
    icon: <GraduationCap width="30" />,
    path: "/student/on-demand",
  },
  {
    label: "Quiz",
    icon: <ClipBoardListCheck width="22" />,
    path: "/student/quiz",
  },
  {
    label: "Dashboard",
    icon: <Laptop width="28" />,
    path: "/student/dashboard",
  },
  {
    label: "Wallet",
    icon: <WalletIcon width="26" />,
    path: "/student/wallet",
  },
  {
    label: "Profile",
    icon: <ProfileIcon width="22" />,
    path: "/student/profile",
  },
  {
    label: "Edit Profile",
    icon: <EditProfileIcon width="30" />,
    path: "/student/edite/profile",
  },
  {
    label: "Inbox",
    icon: <EmailIcon width="26" />,
    path: "/student/inbox",
  },
];

export const teacherMenus = [
  
 
  {
    label: "Dashboard",
    icon: <Laptop width="28" />,
    path: "/teacher/dashboard",
  },
  {
    label: "Wallet",
    icon: <WalletIcon width="26" />,
    path: "/teacher/wallet",
  },
  {
    label: "Profile",
    icon: <ProfileIcon width="22" />,
    path: "/teacher/profile",
  },
  {
    label: "Edit Profile",
    icon: <EditProfileIcon width="30" />,
    path: "/teacher/edit-profile",
  },
  {
    label: "Inbox",
    icon: <EmailIcon width="26" />,
    path: "/teacher/inbox",
  }, 
];


export const adminMenus = [
  {
    icon: <HomeMenuIcon width="26" />,
    path: "/admin/Home",
  },
  {
    icon: <QuizMenuIcon width="26" />,
    path: "/admin/quiz",
  },
  {
    icon: <TeacherMenuIcon width="26" />,
    path: "/admin/teacher",
  },
  {
    icon: <StudentMenuIcon width="26" />,
    path: "/admin/student",
  },
  {
    icon: <WalletMenuIcon width="26" />,
    path: "/admin/wallet",
  },
  {
    icon: <ContactMenuIcon width="26" />,
    path: "/admin/contact",
  },
];

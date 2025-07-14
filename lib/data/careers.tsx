import {
	Briefcase,
	Globe,
	GraduationCap,
	Heart,
	MonitorSmartphone,
	Plane,
} from "@/components/icons";

export interface Benefit {
	icon: React.ReactNode;
	title: string;
	items: string[];
}

export const benefits: Benefit[] = [
	{
		icon: <Briefcase className="w-5 h-5" />,
		title: "Health & Wellness",
		items: [
			"Comprehensive health, dental, and vision coverage",
			"Mental health support and wellness stipends",
			"Paid parental leave and family support resources",
		],
	},
	{
		icon: <Plane className="w-5 h-5" />,
		title: "Time Off",
		items: [
			"Generous vacation and holiday policies",
			"Flexible work schedules and remote-friendly culture",
			"Annual company-wide rest weeks",
		],
	},
	{
		icon: <GraduationCap className="w-5 h-5" />,
		title: "Growth & Learning",
		items: [
			"Annual learning and development budget",
			"Access to courses, workshops, and conferences",
			"Mentorship opportunities and career pathing",
		],
	},
	{
		icon: <MonitorSmartphone className="w-5 h-5" />,
		title: "Tools & Tech",
		items: [
			"High-end equipment and tools of your choice",
			"Home office stipend for remote employees",
			"Modern project management and design systems",
		],
	},
	{
		icon: <Globe className="w-5 h-5" />,
		title: "Mission-Driven",
		items: [
			"Work with purpose and impact",
			"Sustainability-driven practices",
			"Community service and volunteer time",
		],
	},
	{
		icon: <Heart className="w-5 h-5" />,
		title: "Culture & Belonging",
		items: [
			"Inclusive and supportive team culture",
			"Regular team events and retreats",
			"Celebrations, birthdays & wins",
		],
	},
];

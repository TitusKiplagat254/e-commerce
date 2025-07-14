import {
	ChildrenPrivacy,
	ChoicesRights,
	ContactUs,
	Cookies,
	DataSecurity,
	DataTransfers,
	HeroSection,
	HowWeUse,
	InformationWeCollect,
	PolicyChanges,
	SharingInfo,
} from "@/components/privacy";
import { Separator } from "@/components/ui/separator";

function Privacy() {
	return (
		<>
			<HeroSection />
			<section className="py-16">
				<div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-12">
					<InformationWeCollect />
					<Separator />
					<HowWeUse />
					<Separator />
					<SharingInfo />
					<Separator />
					<DataSecurity />
					<Separator />
					<ChoicesRights />
					<Separator />
					<Cookies />
					<Separator />
					<DataTransfers />
					<Separator />
					<ChildrenPrivacy />
					<Separator />
					<PolicyChanges />
					<Separator />
					<ContactUs />
				</div>
			</section>
		</>
	);
}

export default Privacy;

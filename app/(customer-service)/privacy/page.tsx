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

function Privacy() {
	return (
		<>
			<HeroSection />
			<section className="py-16">
				<div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-12">
					<InformationWeCollect />
					<HowWeUse />
					<SharingInfo />
					<DataSecurity />
					<ChoicesRights />
					<Cookies />
					<DataTransfers />
					<ChildrenPrivacy />
					<PolicyChanges />
					<ContactUs />
				</div>
			</section>
		</>
	);
}

export default Privacy;

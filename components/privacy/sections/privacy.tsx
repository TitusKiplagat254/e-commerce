import { Separator } from "@/components/ui/separator";
import ChildrenPrivacy from "../children-privacy";
import ChoicesRights from "../choices-rights";
import ContactUs from "../contact-us";
import Cookies from "../cookies";
import DataSecurity from "../data-security";
import DataTransfers from "../data-transfers";
import HowWeUse from "../how-we-use";
import InformationWeCollect from "../info-we-collect";
import PolicyChanges from "../policy-changes";
import SharingInfo from "../sharing-info";

const PrivacySection = () => {
	return (
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
	);
};

export default PrivacySection;

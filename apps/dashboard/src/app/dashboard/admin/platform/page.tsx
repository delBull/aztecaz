import { getPlatformConfig } from "@/actions/update-platform-config";
import AdminPlatformClient from "@/components/organization/AdminPlatformClient";

export default async function AdminPlatformPage() {
    const initialData = await getPlatformConfig("about_aztecaz");

    return (
        <div className="p-8">
            <AdminPlatformClient initialData={initialData as any} />
        </div>
    );
}

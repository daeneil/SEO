import { Separator } from "@/components/ui/separator";
import { ProfileForm } from "./profile-form";
import { MainNav } from "@/components/dashboard/components/main-nav";

export default function SettingsPage() {
  return (
    <>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Profile</h3>
          <p className="text-sm text-muted-foreground">
            This is your Settings page
          </p>
        </div>
        <Separator />
        <ProfileForm />
      </div>
    </>
  );
}

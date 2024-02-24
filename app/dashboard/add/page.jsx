import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Page() {
  return (
    <div>
      <form className="space-y-8">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="namamobil">Nama Mobil</Label>
          <Input
            placeholder="Masukkan Nama Mobil"
            type="text"
            name="namamobil"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="keadaan">Keadaan</Label>
          <Input
            placeholder="Masukkan Keadaan Mobil"
            type="text"
            name="keadaan"
          />
        </div>
        <Button variant="outline">Submit</Button>
      </form>
    </div>
  );
}

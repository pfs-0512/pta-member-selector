import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { HelpCircle } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [membershipType, setMembershipType] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!membershipType || !agreedToTerms) {
      return;
    }
    // Handle form submission
    console.log("Form submitted:", { membershipType, agreedToTerms });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <RadioGroup
              value={membershipType}
              onValueChange={setMembershipType}
              className="space-y-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="current" id="current" />
                <Label htmlFor="current">現PTA会員</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="past" id="past" />
                <Label htmlFor="past">過去にPTAに在籍</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="supporting" id="supporting" />
                <Label htmlFor="supporting">賛助会員として新規に入会する</Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="h-4 w-4 text-gray-400 cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent className="max-w-xs">
                      <p>
                        賛助会員とは、法人やその他の会員制組織において、事業への賛同の意を表して入会・登録する会員です。運営や実行には直接関与せず、入会金や賛助会費によって組織を支援します。
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </RadioGroup>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={agreedToTerms}
              onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
            />
            <Label htmlFor="terms" className="text-sm">
              <span>
                <a href="#" className="underline">利用規約</a>
                と
                <a href="#" className="underline">プライバシーポリシー</a>
                に同意します。
              </span>
            </Label>
          </div>

          <div className="flex space-x-4">
            <Button
              type="button"
              variant="outline"
              className="flex-1"
              onClick={() => window.history.back()}
            >
              キャンセル
            </Button>
            <Button
              type="submit"
              className="flex-1"
              disabled={!membershipType || !agreedToTerms}
            >
              アカウントを登録する
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
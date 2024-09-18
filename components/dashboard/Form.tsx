"use client";

import { useState, useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { PlusCircle, X } from "lucide-react";
import { useRouter } from "next/navigation";

type FormData = {
  title: string;
  imageUrl: string;
  description: string;
  label: string;
  customInput: boolean;
  wallet: string;
  actions: { value: string }[];
};

export default function Form() {
  const { publicKey, connected } = useWallet();
  const [formData, setFormData] = useState<FormData>({
    title: "",
    imageUrl: "",
    description: "",
    label: "",
    customInput: false,
    wallet: "",
    actions: [{ value: "" }],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();
  useEffect(() => {
    if (connected && publicKey) {
      setFormData((prevState) => ({
        ...prevState,
        wallet: publicKey.toBase58(),
      }));
    }
  }, [connected, publicKey]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prevState) => ({
      ...prevState,
      customInput: checked,
    }));
  };

  const handleActionChange = (index: number, value: string) => {
    const newActions = [...formData.actions];
    newActions[index] = { value };
    setFormData((prevState) => ({
      ...prevState,
      actions: newActions,
    }));
  };

  const addAction = () => {
    if (formData.actions.length < 3) {
      setFormData((prevState) => ({
        ...prevState,
        actions: [...prevState.actions, { value: "" }],
      }));
    }
  };

  const removeAction = (index: number) => {
    setFormData((prevState) => ({
      ...prevState,
      actions: prevState.actions.filter((_, i) => i !== index),
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/blinks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to save data");
      }

      const result = await response.json();

      router.push("/discover");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-800 rounded-lg shadow-sm">
        <div className="p-4">
          <h1 className="text-xl uppercase font-bold mb-4 text-center text-black dark:text-white">
            Create Campaign
          </h1>
          <form
            onSubmit={handleSubmit}
            className="space-y-3 text-black dark:text-white"
          >
            <div>
              <Label
                htmlFor="wallet"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Wallet
              </Label>
              <Input
                id="wallet"
                name="wallet"
                value={formData.wallet}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label
                htmlFor="title"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Title
              </Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label
                htmlFor="description"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Description
              </Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                className="mt-1"
                rows={3}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label
                  htmlFor="imageUrl"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Image URL
                </Label>
                <Input
                  id="imageUrl"
                  name="imageUrl"
                  type="url"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label
                  htmlFor="label"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Label
                </Label>
                <Input
                  id="label"
                  name="label"
                  value={formData.label}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
              </div>
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Action(Max 3)
              </Label>
              {formData.actions.map((action, index) => (
                <div key={index} className="flex items-center space-x-2 mt-1">
                  <Input
                    value={action.value}
                    onChange={(e) => handleActionChange(index, e.target.value)}
                    placeholder={`Action ${index + 1}`}
                    required
                    className="flex-grow"
                  />
                  {index > 0 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeAction(index)}
                      className="p-1"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
              {formData.actions.length < 3 && (
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addAction}
                  className="mt-1 text-xs text-black dark:text-white"
                >
                  <PlusCircle className="h-3 w-3 mr-1" />
                  Add Actions
                </Button>
              )}
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="customInput"
                checked={formData.customInput}
                onCheckedChange={handleCheckboxChange}
              />
              <Label
                htmlFor="customInput"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Custom Input
              </Label>
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

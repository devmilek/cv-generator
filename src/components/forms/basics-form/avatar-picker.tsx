import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { useCVStore } from "@/stores/cv-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { ImageIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  imageSrc: z.string().url(),
});

const AvatarPicker = () => {
  const { basics } = useCVStore();
  const form = useForm<z.infer<typeof schema>>({
    defaultValues: {
      imageSrc: basics.imageSrc,
    },
    resolver: zodResolver(schema),
  });
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="size-24 rounded-full bg-muted overflow-hidden">
          {basics.imageSrc ? (
            <Image
              src={basics.imageSrc}
              alt="Avatar"
              width={96}
              height={96}
              className="rounded-full size-full"
              unoptimized
            />
          ) : (
            <ImageIcon className="size-4" />
          )}
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Choose an avatar</DialogTitle>
          <DialogDescription>
            Enter the URL of an image to use as your avatar
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form></form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AvatarPicker;

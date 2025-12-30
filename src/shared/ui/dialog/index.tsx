"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Box, Theme } from "@radix-ui/themes";
import { X } from "lucide-react";
import * as styles from "./styles.css";

interface SharedDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  trigger?: React.ReactNode;
}

export const SharedDialog = ({
  open,
  onOpenChange,
  children,
  trigger,
}: SharedDialogProps) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}

      <Dialog.Portal>
        <Dialog.Overlay className={styles.dialogOverlay} />

        <Theme className="light-theme">
          <Dialog.Content className={styles.dialogContent}>
            <Dialog.DialogTitle></Dialog.DialogTitle>
            <Dialog.Close asChild>
              <button className={styles.dialogClose} aria-label="Закрити">
                <X size={28} strokeWidth={2} />
              </button>
            </Dialog.Close>
            <Box mt="6">{children}</Box>
          </Dialog.Content>
        </Theme>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

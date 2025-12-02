export interface IWritingGuideline {
  id: string;
  section: string;
  description: string;
  example: string;
}

export interface IZenWritingGuideProps {
  className?: string;
}

export interface IUseZenWritingGuideReturn {
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}

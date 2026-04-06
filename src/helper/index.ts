import { useEffect } from "react";
import DOMPurify from "dompurify";

export const usePageTitle = (title: string): void => {
  useEffect(() => {
    document.title = title + " - FitFlex Fitness & Gym Website";
  }, [title]);
};

export const sanitizeHtml = (html: string): string => {
  return DOMPurify.sanitize(html);
};

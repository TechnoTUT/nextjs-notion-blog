import React from "react";
import styles from "./styles.module.css";

interface NotionPageFooterProps {
  indexPageUrl?: string; // 目次のURL
}

export const NotionPageFooter: React.FC<NotionPageFooterProps> = ({
  indexPageUrl
}) => {
  return (
    <div className={styles.notionPageFooter}>
      <a href={indexPageUrl} className={styles.notionPageFooterLink}>
        トップへ戻る
      </a>
    </div>
  );
};
import React from "react";
import styles from "./styles.module.css";

interface NotionPageFooterProps {
  indexPageUrl?: string; // 目次のURL
}

export const NotionPageFooter: React.FC<NotionPageFooterProps> = ({
  indexPageUrl = "#", // デフォルト値を設定
}) => {
  return (
    <div className={styles.notionPageFooter}>
      {indexPageUrl ? (
        <a href={indexPageUrl} className={styles.notionPageFooterLink}>
          トップへ戻る
        </a>
      ) : (
        <span className={styles.notionPageFooterLinkDisabled}>
          トップへ戻る
        </span>
      )}
    </div>
  );
};
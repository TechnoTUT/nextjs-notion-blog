import React from "react";
import Link from 'next/link'
import styles from "./styles.module.css";

interface NotionPageFooterProps {
  indexPageUrl?: string; // 目次のURL
}

export const NotionPageFooter: React.FC<NotionPageFooterProps> = ({
  indexPageUrl = "https://blog.technotut.net/", // デフォルトの目次URL
}) => {
  return (
    <div className={styles.notionPageFooter}>
      

      <a href={indexPageUrl} className={styles.notionPageFooterLink}>
        トップページへ戻る
      </a>

      
      
    </div>
  );
};
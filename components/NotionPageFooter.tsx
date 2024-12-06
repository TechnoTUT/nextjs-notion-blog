import React from 'react'

import styles from './styles.module.css'

interface NotionPageFooterProps {
  indexPageUrl?: string // 目次のURL
}

export function NotionPageFooter({
  indexPageUrl
}: NotionPageFooterProps): JSX.Element {
  return (
    <div className={styles.notionPageFooter}>
      {indexPageUrl ? (
        <a
          href={indexPageUrl ? encodeURI(indexPageUrl) : '#'}
          className={styles.notionPageFooterLink}
        >
          トップへ戻る
        </a>
      ) : (
        <span className={styles.notionPageFooterLinkDisabled}>
          トップへ戻る
        </span>
      )}
    </div>
  )
}

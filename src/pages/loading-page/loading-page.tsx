import styles from './loading-page.module.css';

export function LoadingPage(): JSX.Element {
  return (
    <div className={styles.wrap}>
      <div className={styles.spinner} data-testid="loading-spinner"></div>
    </div>
  );
}


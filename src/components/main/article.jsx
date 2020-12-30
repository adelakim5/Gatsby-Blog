import React from "react"
import articleStyles from "./article.module.css"

export default function Article() {
  return (
    <div>
      <div className={articleStyles.filter_label_selected}>
        <span className={articleStyles.selected}>태그이름</span>
        <span className={articleStyles.selected}>태그이름</span>
        <span className={articleStyles.selected}>태그이름</span>
        <span className={articleStyles.selected}>태그이름</span>
      </div>
      <div className={articleStyles.filter_lists}>
        <div className={articleStyles.row}>
          <div className={articleStyles.col_item}>
            <div className={articleStyles.card_body}>
              <p className={articleStyles.title}>제목</p>
              <p className={articleStyles.tag}>태그</p>
            </div>
          </div>
          <div className={articleStyles.col_item}>
            <div className={articleStyles.card_body}>
              <p className={articleStyles.title}>제목</p>
              <p className={articleStyles.tag}>태그</p>
            </div>
          </div>
          <div className={articleStyles.col_item}>
            <div className={articleStyles.card_body}>
              <p className={articleStyles.title}>제목</p>
              <p className={articleStyles.tag}>태그</p>
            </div>
          </div>
          <div className={articleStyles.col_item}>
            <div className={articleStyles.card_body}>
              <p className={articleStyles.title}>제목</p>
              <p className={articleStyles.tag}>태그</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

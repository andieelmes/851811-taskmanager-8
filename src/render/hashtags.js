const makeTaskHashtag = (hashtag) => `<span class="card__hashtag-inner">
    <input
      type="hidden"
      name="hashtag"
      value="repeat"
      class="card__hashtag-hidden-input"
    />
    <button type="button" class="card__hashtag-name">
      #${hashtag}
    </button>
    <button type="button" class="card__hashtag-delete">
      delete
    </button>
  </span>`;


const makeTaskHashtags = (hashtags) => {
  return hashtags.reduce((totalHashtags, hashtag) => totalHashtags + makeTaskHashtag(hashtag), ``);
};

export default makeTaskHashtags;

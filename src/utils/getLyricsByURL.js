import axios from 'axios';

const cio = require('cheerio-without-node-native');

const getLyricsByURL = async (url) => {
  const { data } = await axios.get(url);
  const $ = cio.load(data);
  let lyrics = $('div[class="lyrics"]').text().trim();
  if (!lyrics) {
    lyrics = '';
    $('div[class^="Lyrics__Container"]').each((_, elem) => {
      if ($(elem).text().length !== 0) {
        const snippet = $(elem)
          .html()
          .replace(/<br>/g, '¬')
          .replace(/<(?!\s*br\s*\/?)[^>]+>/gi, '');
        lyrics += `${$('<textarea/>').html(snippet).text().trim()}`;
      }
    });
  }
  return lyrics;
};

export default getLyricsByURL;

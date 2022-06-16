/**
 * Cookie banner
 */
tarteaucitron.init({
  "privacyUrl": "/mentions",
  "hashtag": "#tarteaucitron",
  "cookieName": "tarteaucitron",
  "orientation": "middle",
  "showAlertSmall": false,
  "cookieslist": false,
  "showIcon": true,
  "iconPosition": "BottomRight",
  "adblocker": false,
  "DenyAllCta": true,
  "AcceptAllCta": true,
  "highPrivacy": true,
  "handleBrowserDNTRequest": false,
  "removeCredit": false,
  "moreInfoLink": true,
  "useExternalCss": false,
  "useExternalJs": false,
  "readmoreLink": "",
  "mandatory": true
});
(tarteaucitron.job = tarteaucitron.job || []).push('recaptcha');
/**
 * Social wall
 */

const slider = document.getElementById('news_slider');
const news_item = document.getElementsByClassName('news-item')[0];
document.getElementById('news_left').addEventListener('click', function (event) {
  event.preventDefault();
  slider.scrollLeft -= news_item.offsetWidth + 15;
});
document.getElementById('news_right').addEventListener('click', function (event) {
  event.preventDefault();
  slider.scrollLeft += news_item.offsetWidth + 15;
});
document.getElementById('news_left_mobile').addEventListener('click', function (event) {
  event.preventDefault();
  slider.scrollLeft -= news_item.offsetWidth + 15;
});
document.getElementById('news_right_mobile').addEventListener('click', function (event) {
  event.preventDefault();
  slider.scrollLeft += news_item.offsetWidth + 15;
});
//script.js 파일
var entries = [{
    "term": "BACCHUS. 바쿠스",
    "part": "명사.",
    "definition": "고대인들이 술에 취할 명분으로 편의상 만들어낸 신."
    },
    {
    "term": "BACKBITE. 험담하다",
    "part": "동사.",
    "definition": "상대방에게 들킬 염려가 없을 때, 그에 관해 본 그대로를 입에담다."
    },
    {
    "term": "BANG. 빵! 가지런한 앞머리",
    "part": "명사.",
    "definition": "총 쏘는 소리. 앞머리를 잘라 내린 여성의 머리모양."
    }];
 
var html = 'getScript 함수 사용입니다.';
 
$.each(entries, function() {
  html += '<div class="entry">';
  html += '<h3 class="term">' + this['term'] + '</h3>';
  html += '<div class="part">' + this['part'] + '</div>';
  html += '<div class="definition">' + this['definition'] + '</div>';
  html += '</div>';
});
 
$('#dictionary').html(html);

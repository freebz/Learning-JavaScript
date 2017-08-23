let f;				// 정의되지 않은 함수
{
    let o = { note: 'Safe' };
    f = function() {
	return o;
    }
}
let oRef = f();
oRef.note = "Not so safe after all!";

const appInfo = {
    company: 'White Knight Software, Inc',
    version: '1.3.5',
    buildId: '0a995448-ead4-4a8b-b050-9c908327ea2',
    // 이 함수는 getter이므로 동결한 상태에서도 계속 동작합니다.
    copyright() {
	return `© ${new Date().getFullYear()}, ${this.company}`;
    },
};
Object.freeze(appInfo);
Object.isFrozen(appInfo);	// true

appInfo.newProp = 'test';
// TypeError: Can't add property newProp, object is not extensible

delete appInfo.company;
// TypeError: Cannot delete property 'company' of [object Object]

appInfo.company = 'test';
// TypeError: Cannot assign to read-only property 'company' of [object Object]

Object.defineProperty(appInfo, 'company', { enumerable: false });
// TypeError: Cannot redefine property: company


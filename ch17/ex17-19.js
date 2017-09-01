const input = "One two three";
input.replace(/two/, '($`)');	// "One (One ) three"
input.replace(/two/, '($&)');	// "One (two) three"
input.replace(/two/, "($')");	// "One ( three) three"
input.replace(/two/, "($$)");	// "One ($) three"

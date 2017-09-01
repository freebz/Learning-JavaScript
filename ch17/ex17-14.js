const input = "Regex pros know the difference between\n" +
      "<i>greedy</i> and <i>lazy</i> matching.";
input.replace(/<i>(.*)<\/i>/ig, '<string>$1</strong>');
input.replace(/<i>(.*?)<\/i>/ig, '<string>$1</strong>');

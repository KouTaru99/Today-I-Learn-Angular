import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isCollapsed = false;

  title = 'todayilearnangular';
  newText = ''
  dataText = [
    ['abc', 'varA', 'def', 'varB']
];

dictionaryEnglishLang = [
  {key: 'abc', value: 'ABC'},
  {key: 'def', value: 'DEF'}
];

generateString(dataText:any, dictionary:any) {
  let stringResult = '';

  // Duyệt qua từng từ trong dữ liệu đầu vào
  for (let i = 0; i < dataText[0].length; i++) {
      const word = dataText[0][i];

      // Tìm từ trong từ điển
      const dictionaryEntry = dictionary.find((entry: any) => entry.key === word);

      // Nếu tìm thấy từ trong từ điển, thay thế bằng giá trị tương ứng
      if (dictionaryEntry) {
          stringResult += dictionaryEntry.value + ' ';
      } else {
          // Nếu không tìm thấy, sử dụng từ gốc
          stringResult += word + ' ';
      }
  }

  // Loại bỏ khoảng trắng cuối cùng (nếu có)
  stringResult = stringResult.trim();

  return stringResult;
}

ngOnInit(): void {
  this.newText = this.generateString(this.dataText, this.dictionaryEnglishLang)
  console.log(this.newText);

}
}


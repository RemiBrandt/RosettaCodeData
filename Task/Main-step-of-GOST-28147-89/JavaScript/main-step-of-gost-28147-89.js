function ОсновнойШаг(блок_текста, элемент_ключа) {
  var N = блок_текста.slice(0);
  var X = элемент_ключа;
  var S = (N[0] + X) & 0xFFFFFFFF;
  var ячейка; var нов_S = 0;
  for (var сч = 0; сч < 4; сч++) {
    ячейка = (S >>> (сч << 3)) & 0xFF;
    нов_S += (ТаблицаЗамен[сч*2][ячейка & 0x0F] + (ТаблицаЗамен[сч*2+1][ячейка >>> 4] << 4)) << (сч << 3);
  }
  S = (((нов_S << 11) + (нов_S >>> 21)) & 0xFFFFFFFF) ^ N[1];
  N[1] = N[0]; N[0] = S;
  return N;
}

function pascal(d) {
  var r, tem;

  if (d === 1) {
    return [1];
  }

  if (d === 2) {
    return [1, 1];
  }

  if (d === 0) {
    return [0];
  }

  r = [1, 1];

  for (var i = 2, _pj_a = d; i < _pj_a; i += 1) {
    tem = [];

    for (var i = 1, _pj_b = r.length; i < _pj_b; i += 1) {
      tem.push(r[i] + r[i - 1]);
    }

    r = [1] + tem + [1];
  }

  return r;
}
console.log(pascal(4))
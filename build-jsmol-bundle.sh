#!/bin/sh
# Pack JSmol/JSpecView into two files instead of ~150 sequential requests:
#   jsmol/js/jsmol-jsv.js        the ten page scripts, concatenated
#   jsmol/j2s/core/jsvclasses.js the j2s class files JSpecView loads, listed in
#                                jsv-classes.txt (registered in core/package.js)
# Re-run after changing either list. Pages load only jsmol-jsv.js.
cd "$(dirname "$0")" || exit 1

out=jsmol/js/jsmol-jsv.js
: > $out
for f in jquery/jquery.js js/JSmoljQueryExt.js js/JSmolCore.js js/JSmolApplet.js \
         js/JSmolApi.js js/JSmolControls.js js/j2sjmol.js js/JSmol.js \
         js/JSmolMenu.js js/JSmolJSV.js; do
  cat "jsmol/$f" >> $out
  printf '\n;\n' >> $out
done

out=jsmol/j2s/core/jsvclasses.js
: > $out
while read -r f; do
  cat "jsmol/j2s/$f" >> $out
  printf '\n' >> $out
done < jsv-classes.txt

# class list for package.js, as a JS array literal
sed 's#\.js$##; s#/#.#g; s#.*#"&"#' jsv-classes.txt | paste -sd, - > /tmp/jsv-classnames
echo "Jmol._jsvClasses=[$(cat /tmp/jsv-classnames)];" >> jsmol/js/jsmol-jsv.js

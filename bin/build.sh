#!/bin/bash

set -o errexit
set -o pipefail
set -o nounset

wget -O- ftp://ftp.unicode.org/Public/UNIDATA/CaseFolding.txt | awk 'BEGIN {
	FS = "; "
	print "export const mappings = {"
}
/^[^#]/ && ($2 == "C" || $2 == "S") { printf "  0x%s: 0x%s,\n", $1, $3 }
END {
	print "};"
}' > src/mappings.js

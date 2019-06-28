# file-names-renamer
Renames the files

# Usage

To remove last digits with hyphen(-) in file names
```
- Files
  - DSC_3634-1.jpg
  - DSC_3635-2.jpg
  - DSC_3636-3.jpg
  - DSC_3637-4.jpg
  - DSC_3638-5.jpg
  - DSC_3639-6.jpg
  - DSC_3640-7.jpg
```

```sh
file-names-renamer -d ./testing -s \(\\d.\) -r file\-\$1 -l ./rename.log -i \*.*
```

The above command will generate following renaming effect on files
```
- Files
  - DSC_3634.jpg
  - DSC_3635.jpg
  - DSC_3636.jpg
  - DSC_3637.jpg
  - DSC_3638.jpg
  - DSC_3639.jpg
  - DSC_3640.jpg
```

# Parameters

1. `-d, --dir <dir>`: Directory to work on
2. `-i, --input-pattern <files>`: Directory to work on
3. `-s, --search <search>`: Search for the pattern in file name
4. `-r, --replace <replace>`: replace with
5. `-l, --log <log>`: replace with
6. `-dr, --dry-run`: replace with

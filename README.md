# stunning-broccoli
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
node index.js ~/Desktop/Files "\-\d{1,}\." "."
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

1. Source Directory i.e. __`~/Desktop/Files`__
2. Search RegExp Parameter i.e. __`"\-\d{1,}\."`__
3. Replace String i.e. __`"."`__

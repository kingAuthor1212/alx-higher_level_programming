#!/usr/bin/python3
if __name__ == "__main__":
    import sys
    argv = sys.argv[1:]
    argv_count = len(argv)
    index = 1
    if argv_count is 0:
        print(f"{argv_count} arguments.")
    elif argv_count is 1:
        print(f"{argv_count} argument:")
        print(f"{index}: {sys.argv[1]}")
    else:
        print(f"{argv_count} arguments:")
        while index <= argv_count:
            print(f"{index}: {sys.argv[index]}")
            index += 1

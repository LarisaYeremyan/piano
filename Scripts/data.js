var WHITE_KEY_WIDTH = 25;
var BLACK_KEY_WIDTH = 18;
var KEY_TOP = 170;
var PRESSED_KEY_TOP = 172;
var LEFT_SHIFT = 13; 

var pianoKeys = [
[
	{ keyName: 'A0', class: 'white_key', whiteKeys: 0, frequency: 27.5, shift: 0, key: '1', keyCode: 49, shiftKey: false, fileName: 'piano_a0.mp3' },
	{ keyName: 'A0#', class: 'black_key', whiteKeys: 1, frequency: 29.13, shift: -2, key: '1+↑', keyCode: 49, shiftKey: true, fileName: 'piano_ab1.mp3' },
	{ keyName: 'B0', class: 'white_key', whiteKeys: 1, frequency: 30.86, shift: 0, key: '2', keyCode: 50, shiftKey: false, fileName: 'piano_b0.mp3' }
],

[
	{ keyName: 'C1', class: 'white_key', whiteKeys: 2, frequency: 32.70, shift: 0, key: '3', keyCode: 51, shiftKey: false, fileName: 'piano_c1.mp3' },
	{ keyName: 'C1#', class: 'black_key', whiteKeys: 3, frequency: 34.64, shift: -2, key: '3+↑', keyCode: 51, shiftKey: true, fileName: 'piano_bb0.mp3' },
	{ keyName: 'D1', class: 'white_key', whiteKeys: 3, frequency: 36.70, shift: 0, key: '4', keyCode: 52, shiftKey: false, fileName: 'piano_d1.mp3' },
	{ keyName: 'D1#', class: 'black_key', whiteKeys: 4, frequency: 38.89, shift: 2, key: '4+↑', keyCode: 52, shiftKey: true, fileName: 'piano_db1.mp3' },
	{ keyName: 'E1', class: 'white_key', whiteKeys: 4, frequency: 41.20, shift: 0, key: '5', keyCode: 53, shiftKey: false, fileName: 'piano_e1.mp3' },
	{ keyName: 'F1', class: 'white_key', whiteKeys: 5, frequency: 43.65, shift: 0, key: '6', keyCode: 54, shiftKey: false, fileName: 'piano_f1.mp3' },
	{ keyName: 'F1#', class: 'black_key', whiteKeys: 6, frequency: 46.24, shift: -2, key: '6+↑', keyCode: 54, shiftKey: true, fileName: 'piano_eb1.mp3' },
	{ keyName: 'G1', class: 'white_key', whiteKeys: 6, frequency: 48.99, shift: 0, key: '7', keyCode: 55, shiftKey: false, fileName: 'piano_g1.mp3' },
	{ keyName: 'G1#', class: 'black_key', whiteKeys: 7, frequency: 51.91, shift: 0, key: '7+↑', keyCode: 55, shiftKey: true, fileName: 'piano_gb1.mp3' },
	{ keyName: 'A1', class: 'white_key', whiteKeys: 7, frequency: 55, shift: 0, key: '8', keyCode: 56, shiftKey: false, fileName: 'piano_a1.mp3' },
	{ keyName: 'A1#', class: 'black_key', whiteKeys: 8, frequency: 58.27, shift: 2, key: '8+↑', keyCode: 56, shiftKey: true, fileName: 'piano_ab2.mp3' },
	{ keyName: 'B1', class: 'white_key', whiteKeys: 8, frequency: 61.73, shift: 0, key: '9', keyCode: 57, shiftKey: false, fileName: 'piano_b1.mp3' }
],

[
	{ keyName: 'C2', class: 'white_key', whiteKeys: 9, frequency: 65.40, shift: 0, key: '0', keyCode: 48, shiftKey: false, fileName: 'piano_c2.mp3' },
	{ keyName: 'C2#', class: 'black_key', whiteKeys: 10, frequency: 69.29, shift: -2, key: '0+↑', keyCode: 48, shiftKey: true, fileName: 'piano_bb1.mp3' },
	{ keyName: 'D2', class: 'white_key', whiteKeys: 10, frequency: 73.41, shift: 0, key: 'q', keyCode: 81, shiftKey: false, fileName: 'piano_d2.mp3' },
	{ keyName: 'D2#', class: 'black_key', whiteKeys: 11, frequency: 77.78, shift: 2, key: 'q+↑', keyCode: 81, shiftKey: true, fileName: 'piano_db2.mp3' },
	{ keyName: 'E2', class: 'white_key', whiteKeys: 11, frequency: 82.40, shift: 0, key: 'w', keyCode: 87, shiftKey: false, fileName: 'piano_e2.mp3' },
	{ keyName: 'F2', class: 'white_key', whiteKeys: 12, frequency: 87.30, shift: 0, key: 'e', keyCode: 69, shiftKey: false, fileName: 'piano_f2.mp3' },
	{ keyName: 'F2#', class: 'black_key', whiteKeys: 13, frequency: 92.49, shift: -2, key: 'e+↑', keyCode: 69, shiftKey: true, fileName: 'piano_eb2.mp3' },
	{ keyName: 'G2', class: 'white_key', whiteKeys: 13, frequency: 97.99, shift: 0, key: 'r', keyCode: 82, shiftKey: false, fileName: 'piano_g2.mp3' },
	{ keyName: 'G2#', class: 'black_key', whiteKeys: 14, frequency: 103.82, shift: 0, key: 'r+↑', keyCode: 82, shiftKey: true, fileName: 'piano_gb2.mp3' },
	{ keyName: 'A2', class: 'white_key', whiteKeys: 14, frequency: 110, shift: 0, key: 't', keyCode: 84, shiftKey: false, fileName: 'piano_a2.mp3' },
	{ keyName: 'A2#', class: 'black_key', whiteKeys: 15, frequency: 116.54, shift: 2, key: 't+↑', keyCode: 84, shiftKey: true, fileName: 'piano_ab3.mp3' },
	{ keyName: 'B2', class: 'white_key', whiteKeys: 15, frequency: 123.47, shift: 0, key: 'y', keyCode: 89, shiftKey: false, fileName: 'piano_b2.mp3' }
], 
	
[
	{ keyName: 'C3', class: 'white_key', whiteKeys: 16, frequency: 130.81, shift: 0, key: 'u', keyCode: 85, shiftKey: false, fileName: 'piano_c3.mp3' },
	{ keyName: 'C3#', class: 'black_key', whiteKeys: 17, frequency: 138.59, shift: -2, key: 'u+↑', keyCode: 85, shiftKey: true, fileName: 'piano_bb2.mp3' },
	{ keyName: 'D3', class: 'white_key', whiteKeys: 17, frequency: 146.83, shift: 0, key: 'i', keyCode: 73, shiftKey: false, fileName: 'piano_d3.mp3' },
	{ keyName: 'D3#', class: 'black_key', whiteKeys: 18, frequency: 155.56, shift: 2, key: 'i+↑', keyCode: 73, shiftKey: true, fileName: 'piano_db3.mp3' },
	{ keyName: 'E3', class: 'white_key', whiteKeys: 18, frequency: 164.81, shift: 0, key: 'o', keyCode: 79, shiftKey: false, fileName: 'piano_e3.mp3' },
	{ keyName: 'F3', class: 'white_key', whiteKeys: 19, frequency: 174.61, shift: 0, key: 'p', keyCode: 80, shiftKey: false, fileName: 'piano_f3.mp3' },
	{ keyName: 'F3#', class: 'black_key', whiteKeys: 20, frequency: 184.99, shift: -2, key: 'p+↑', keyCode: 80, shiftKey: true, fileName: 'piano_eb3.mp3' },
	{ keyName: 'G3', class: 'white_key', whiteKeys: 20, frequency: 195.99, shift: 0, key: 'a', keyCode: 65, shiftKey: false, fileName: 'piano_g3.mp3' },
	{ keyName: 'G3#', class: 'black_key', whiteKeys: 21, frequency: 207.65, shift: 0, key: 'a+↑', keyCode: 65, shiftKey: true, fileName: 'piano_gb3.mp3' },
	{ keyName: 'A3', class: 'white_key', whiteKeys: 21, frequency: 220, shift: 0, key: '#', keyCode: 83, shiftKey: false, fileName: 'piano_a3.mp3' },
	{ keyName: 'A3#', class: 'black_key', whiteKeys: 22, frequency: 233.08, shift: 2, key: 's+↑', keyCode: 83, shiftKey: true, fileName: 'piano_ab4.mp3' },
	{ keyName: 'B3', class: 'white_key', whiteKeys: 22, frequency: 246.94, shift: 0, key: 'd', keyCode: 68, shiftKey: false, fileName: 'piano_b3.mp3' }
],
 
[
	{ keyName: 'C4', class: 'white_key', whiteKeys: 23, frequency: 261.62, shift: 0, key: 'f', keyCode: 70, shiftKey: false, fileName: 'piano_c4.mp3' },
	{ keyName: 'C4#', class: 'black_key', whiteKeys: 24, frequency: 277.18, shift: -2, key: 'f+↑', keyCode: 70, shiftKey: true, fileName: 'piano_bb3.mp3' },
	{ keyName: 'D4', class: 'white_key', whiteKeys: 24, frequency: 293.66, shift: 0, key: 'g', keyCode: 71, shiftKey: false, fileName: 'piano_d4.mp3' },
	{ keyName: 'D4#', class: 'black_key', whiteKeys: 25, frequency: 311.12, shift: 2, key: 'g+↑', keyCode: 71, shiftKey: true, fileName: 'piano_db4.mp3' },
	{ keyName: 'E4', class: 'white_key', whiteKeys: 25, frequency: 329.62, shift: 0, key: 'h', keyCode: 72, shiftKey: false, fileName: 'piano_e4.mp3' },
	{ keyName: 'F4', class: 'white_key', whiteKeys: 26, frequency: 349.23, shift: 0, key: 'j', keyCode: 74, shiftKey: false, fileName: 'piano_f4.mp3' },
	{ keyName: 'F4#', class: 'black_key', whiteKeys: 27, frequency: 369.99, shift: -2, key: 'j+↑', keyCode: 74, shiftKey: true, fileName: 'piano_eb4.mp3' },
	{ keyName: 'G4', class: 'white_key', whiteKeys: 27, frequency: 391.99, shift: 0, key: 'k', keyCode: 75, shiftKey: false, fileName: 'piano_g4.mp3' },
	{ keyName: 'G4#', class: 'black_key', whiteKeys: 28, frequency: 415.30, shift: 0, key: 'k+↑', keyCode: 75, shiftKey: true, fileName: 'piano_gb4.mp3' },
	{ keyName: 'A4', class: 'white_key', whiteKeys: 28, frequency: 440, shift: 0, key: 'l', keyCode: 76, shiftKey: false, fileName: 'piano_a4.mp3' },
	{ keyName: 'A4#', class: 'black_key', whiteKeys: 29, frequency: 466.16, shift: 2, key: 'l+↑', keyCode: 76, shiftKey: true, fileName: 'piano_ab5.mp3' },
	{ keyName: 'B4', class: 'white_key', whiteKeys: 29, frequency: 493.88, shift: 0, key: 'z', keyCode: 90, shiftKey: false, fileName: 'piano_b4.mp3' }
], 

[
	{ keyName: 'C5', class: 'white_key', whiteKeys: 30, frequency: 523.24, shift: 0, key: 'x', keyCode: 88, shiftKey: false, fileName: 'piano_c5.mp3' },
	{ keyName: 'C5#', class: 'black_key', whiteKeys: 31, frequency: 554.36, shift: -2, key: 'x+↑', keyCode: 88, shiftKey: true, fileName: 'piano_bb4.mp3' },
	{ keyName: 'D5', class: 'white_key', whiteKeys: 31, frequency: 587.32, shift: 0, key: 'c', keyCode: 67, shiftKey: false, fileName: 'piano_d5.mp3' },
	{ keyName: 'D5#', class: 'black_key', whiteKeys: 32, frequency: 622.25, shift: 2, key: 'c+↑', keyCode: 67, shiftKey: true, fileName: 'piano_db5.mp3' },
	{ keyName: 'E5', class: 'white_key', whiteKeys: 32, frequency: 659.24, shift: 0, key: 'v', keyCode: 86, shiftKey: false, fileName: 'piano_e5.mp3' },
	{ keyName: 'F5', class: 'white_key', whiteKeys: 33, frequency: 698.46, shift: 0, key: 'b', keyCode: 66, shiftKey: false, fileName: 'piano_f5.mp3' },
	{ keyName: 'F5#', class: 'black_key', whiteKeys: 34, frequency: 739.98, shift: -2, key: 'b+↑', keyCode: 66, shiftKey: true, fileName: 'piano_eb5.mp3' },
	{ keyName: 'G5', class: 'white_key', whiteKeys: 34, frequency: 783.98, shift: 0, key: 'n', keyCode: 78, shiftKey: false, fileName: 'piano_g5.mp3' },
	{ keyName: 'G5#', class: 'black_key', whiteKeys: 35, frequency: 830.60, shift: 0, key: 'n+↑', keyCode: 78, shiftKey: true, fileName: 'piano_gb5.mp3' },
	{ keyName: 'A5', class: 'white_key', whiteKeys: 35, frequency: 880, shift: 0, key: 'm', keyCode: 77, shiftKey: false, fileName: 'piano_a5.mp3' },
	{ keyName: 'A5#', class: 'black_key', whiteKeys: 36, frequency: 932.32, shift: 2, key: 'm+↑', keyCode: 77, shiftKey: false, fileName: 'piano_ab6.mp3' },
	{ keyName: 'B5', class: 'white_key', whiteKeys: 36, frequency: 987.76, shift: 0, key: '[1]', keyCode: 97, shiftKey: false, fileName: 'piano_b5.mp3' }
], 

[
	{ keyName: 'C6', class: 'white_key', whiteKeys: 37, frequency: 1046.49, shift: 0, key: '[2]', keyCode: 98, shiftKey: false, fileName: 'piano_c6.mp3' },
	{ keyName: 'C6#', class: 'black_key', whiteKeys: 38, frequency: 1108.73, shift: -2, key: 'W+↑', keyCode: 87, shiftKey: true, fileName: 'piano_bb5.mp3' },
	{ keyName: 'D6', class: 'white_key', whiteKeys: 38, frequency: 1174.65, shift: 0, key: '[3]', keyCode: 99, shiftKey: false, fileName: 'piano_d6.mp3' },
	{ keyName: 'D6#', class: 'black_key', whiteKeys: 39, frequency: 1244.51, shift: 2, key: 'E+↑', keyCode: 69, shiftKey: true, fileName: 'piano_db6.mp3' },
	{ keyName: 'E6', class: 'white_key', whiteKeys: 39, frequency: 1318.49, shift: 0, key: '[4]', keyCode: 100, shiftKey: false, fileName: 'piano_e6.mp3' },
	{ keyName: 'F6', class: 'white_key', whiteKeys: 40, frequency: 1396.92, shift: 0, key: '[5]', keyCode: 101, shiftKey: false, fileName: 'piano_f6.mp3' },
	{ keyName: 'F6#', class: 'black_key', whiteKeys: 41, frequency: 1479.96, shift: -2, key: 'T+↑', keyCode: 84, shiftKey: true, fileName: 'piano_eb6.mp3' },
	{ keyName: 'G6', class: 'white_key', whiteKeys: 41, frequency: 1567.96, shift: 0, key: '[6]', keyCode: 102, shiftKey: false, fileName: 'piano_g6.mp3' },
	{ keyName: 'G6#', class: 'black_key', whiteKeys: 42, frequency: 1661.21, shift: 0, key: 'Y+↑', keyCode: 89, shiftKey: true, fileName: 'piano_gb6.mp3' },
	{ keyName: 'A6', class: 'white_key', whiteKeys: 42, frequency: 1760, shift: 0, key: '[7]', keyCode: 103, shiftKey: false, fileName: 'piano_a6.mp3' },
	{ keyName: 'A6#', class: 'black_key', whiteKeys: 43, frequency: 1864.64, shift: 2, key: 'I+↑', keyCode: 73, shiftKey: true, fileName: 'piano_ab7.mp3' },
	{ keyName: 'B6', class: 'white_key', whiteKeys: 43, frequency: 1975.52, shift: 0, key: '[8]', keyCode: 104, shiftKey: false, fileName: 'piano_b6.mp3' }
],
	 
[
	{ keyName: 'C7', class: 'white_key', whiteKeys: 44, frequency: 2092.99, shift: 0, key: '[9]', keyCode: 105, shiftKey: false, fileName: 'piano_c7.mp3' },
	{ keyName: 'C7#', class: 'black_key', whiteKeys: 45, frequency: 2217.47, shift: -2, key: 'P+↑', keyCode: 80, shiftKey: true, fileName: 'piano_bb6.mp3' },
	{ keyName: 'D7', class: 'white_key', whiteKeys: 45, frequency: 2349.31, shift: 0, key: '[0]', keyCode: 96, shiftKey: false, fileName: 'piano_d7.mp3' },
	{ keyName: 'D7#', class: 'black_key', whiteKeys: 46, frequency: 2489.02, shift: 2, key: 'A+↑', keyCode: 65, shiftKey: true, fileName: 'piano_db7.mp3' },
	{ keyName: 'E7', class: 'white_key', whiteKeys: 46, frequency: 2636.99, shift: 0, key: '[*]', keyCode: 106, shiftKey: false, fileName: 'piano_e7.mp3' },
	{ keyName: 'F7', class: 'white_key', whiteKeys: 47, frequency: 2793.85, shift: 0, key: '[/]', keyCode: 111, shiftKey: false, fileName: 'piano_f7.mp3' },
	{ keyName: 'F7#', class: 'black_key', whiteKeys: 48, frequency: 2959.93, shift: -2, key: 'D+↑', keyCode: 68, shiftKey: true, fileName: 'piano_eb7.mp3' },
	{ keyName: 'G7', class: 'white_key', whiteKeys: 48, frequency: 3135.93, shift: 0, key: '[+]', keyCode: 107, shiftKey: false, fileName: 'piano_g7.mp3' },
	{ keyName: 'G7#', class: 'black_key', whiteKeys: 49, frequency: 3322.43, shift: 0, key: 'F+↑', keyCode: 70, shiftKey: true, fileName: 'piano_gb7.mp3' },
	{ keyName: 'A7', class: 'white_key', whiteKeys: 49, frequency: 3520, shift: 0, key: '[-]', keyCode: 109, shiftKey: false, fileName: 'piano_a7.mp3' },
	{ keyName: 'A7#', class: 'black_key', whiteKeys: 50, frequency: 3729.28, shift: 2, key: 'G+↑', keyCode: 71, shiftKey: true, fileName: 'piano_bb7.mp3' },
	{ keyName: 'B7', class: 'white_key', whiteKeys: 50, frequency: 3951.04, shift: 0, key: '[.]', keyCode: 110, shiftKey: false, fileName: 'piano_b7.mp3' }
], 

[
	{ keyName: 'C8', class: 'white_key', whiteKeys: 51, frequency: 4185.98, shift: 0, key: '`', keyCode: 192, shiftKey: false, fileName: 'piano_c8.mp3' }
] 

];	
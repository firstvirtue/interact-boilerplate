# Interact boilerplate
힘의 연산(Add power)
노멀 벡터로 방향 설정
subtract -> magnitude 연산으로 나온 거리량을 fraction으로 쪼갠 만큼 위치벡터에 add 연산을 해서 이동

보간(Interpolation)
lerp 함수를 통하면 위의 fraction으로 쪼갠 만큼의 연산 결과가 나온다.
*lerp(min, max, fraction) { return (max - min) * fraction + min }
이를 현재 위치에 더함 

## REFERENCES
https://github.com/christopher4lis/canvas-boilerplate.git
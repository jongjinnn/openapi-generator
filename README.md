## 1. clone

```bash
$ git clone https://github.com/jongjinnn/openapi-generator.git

.
.
.

$ yarn install
```

<br/>

## 2. setting swagger.yaml 

2-1. root에 위치한 'code' directory를 삭제한다.

2-2. root에 위치한 swagger.yaml에 기입 되어있던 내용을 전부 지우고 자신이 명세한 yaml 파일 내용을 입력한다.


<br/>

## 3. update swagger.yaml

```bash
( \ 입력 후 Enter 시 개행됨)

$ npx openapi-generator-cli generate \
    -i swagger.yaml \ 
    -g typescript-axios \
    -o src/your_dir_name
```

<br/>

## 4. custom your api configuration

case 1.

```typescript
// /api/instance.ts
import { Configuration, DefaultApi } from "/your_dir_name"; // 경로 수정

const config = new Configuration({
  basePath: "https://api.example.com",
});

export const instance = new DefaultApi(config);

```

```typescript
import { instance } from "./api/instance";

instance.your_api().then().cath()
```

case2. yaml 내부에서 BASE_URL과 같은 기본 setting을 설정한다.


.

.

.

### dependency
```@openapitools/openapi-generator-cli```


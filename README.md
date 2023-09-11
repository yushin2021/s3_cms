# s3_cms
S3+MicroCMS

## S3WEBホスティングの作成

### ①パケット作成
![image](https://github.com/yushin2021/s3_cms/assets/96720606/c61026b6-5cf1-474c-9bb0-64846b8868d7)

![image](https://github.com/yushin2021/s3_cms/assets/96720606/e56bb624-a5c9-43cf-b11a-1d50b82f2dd5)

![image](https://github.com/yushin2021/s3_cms/assets/96720606/a4d7f17c-4783-4ae0-a083-d262d24f3cb7)

### ②プロパティの変更
![image](https://github.com/yushin2021/s3_cms/assets/96720606/456816d8-8df0-4f49-8a8c-40759f26e3ce)

![image](https://github.com/yushin2021/s3_cms/assets/96720606/71204c2e-adf3-4e24-b442-cf7e8c9023f9)

![image](https://github.com/yushin2021/s3_cms/assets/96720606/47692e44-4bfb-4af1-b35e-5ba2d888231a)

### ③コンテンツアップロード
![image](https://github.com/yushin2021/s3_cms/assets/96720606/69dd994d-3daf-4158-9968-56095cfc6248)

### ④アクセス許可
![image](https://github.com/yushin2021/s3_cms/assets/96720606/3aff86fa-188f-446c-bb0e-024cc40289ff)

![image](https://github.com/yushin2021/s3_cms/assets/96720606/8b05a355-4bc1-46b0-8567-616e6c7ce5bb)

{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::saitama-works-test/*"
        }
    ]
}

### CMS

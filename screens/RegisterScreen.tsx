import React, { FC } from "react";
import { Box, Button, Container, Heading, Input } from "native-base";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";

type Props = NativeStackScreenProps<RootStackParamList, "Register">;

const RegisterScreen: FC<Props> = ({ navigation }) => {
  return (
    <Box safeArea flex={1} alignItems="center">
      <Container w="90%" pt={10} centerContent>
        <Heading size="lg" bold bottom={10}>
          アカウント登録
        </Heading>
        <Input
          w="100%"
          mb={5}
          placeholder="メールアドレス"
          placeholderTextColor="blueGray.500"
          backgroundColor="white"
        />
        <Input
          w="100%"
          mb={10}
          placeholder="パスワード"
          placeholderTextColor="blueGray.500"
          backgroundColor="white"
        />
        <Button w="100%" onPress={() => navigation.goBack()}>
          アカウントを作成する
        </Button>
      </Container>
    </Box>
  );
};

export default RegisterScreen;

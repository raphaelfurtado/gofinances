import React, { useContext } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import AppleSvg from '../../assets//apple.svg';
import GoogleSvg from '../../assets/google.svg';
import LogoSvg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';
import { SingInSocialButton } from '../../components/SingInSocialButton';

import 
{
    Container,
    Header,
    TitleWrapper,
    Title,
    SignInTitle,
    Footer,
    FooterWrapper
}
from './styles';

export function SingIn(){
    const { user } = useAuth();

    console.log(user);

    return(
        <Container>
            <Header>
                <TitleWrapper>
                    <LogoSvg
                        width={RFValue(120)}
                        height={RFValue(68)}
                    />
                    <Title>
                        Controle suas {'\n'}
                        finanças de forma {'\n'}
                        muito simples
                    </Title>
                    
                    <SignInTitle>
                        Faça seu login {'\n'} 
                        com uma das contas abaixo
                    </SignInTitle>
                </TitleWrapper>
            </Header>

            <Footer>
                <FooterWrapper>
                    <SingInSocialButton
                        title='Entrar com Google'
                        svg={GoogleSvg}
                    />

                    <SingInSocialButton
                        title='Entrar com Apple'
                        svg={AppleSvg}
                    />

                </FooterWrapper>
            </Footer>

        </Container>
    );
}
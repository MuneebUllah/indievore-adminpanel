import React, { useRef, useState, useEffect, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import {
    Container,
    ImageWrapper,
    ImageContainer,
    Content
} from './style'
import Button from "components/particles/primary-button";

interface User {
    username: string;
    email: string;
    image?: string;
}

interface FormData {
    name: string;
    email: string;
    phone: string;
}

interface ProfileProps{
    setIsOpen:(isOpen:boolean)=>void
}

export const Profile: React.FC<ProfileProps> = ({setIsOpen}) => {
    const [user, setUser] = useState<User | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [profileImage, setProfileImage] = useState<string>('https://picsum.photos/200');
    const [formData, setFormData] = useState<FormData>({ name: '', email: '', phone: '' });
    const dispatch = useDispatch();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('adminDetail') || 'null');
        if (storedUser) setUser(storedUser);
    }, []);

    useEffect(() => {
        setFormData({ name: user?.username || 'Admin', email: user?.email || 'admin@builtinsoft.com', phone: '325447657' });
        setProfileImage(user?.image || 'picsum.photos/300');
    }, [user]);

    const handleImageClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {

        }
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleUpdateProfile = () => {
        setIsOpen(true)
    };

    return (
        <Container>
            <ImageWrapper>
                <ImageContainer onClick={handleImageClick}>
                    <img
                        src={'https://picsum.photos/200'}
                        alt="avatar"

                    />
                </ImageContainer>
            </ImageWrapper>
            <Content>
            <div className='profile-cart'>
                <h2>Name</h2>
                <p>{formData.name}</p>
            </div>
            <div className='profile-cart'>
                <h2>Email</h2>
                <p>{formData.email}</p>
            </div>
            <div className='profile-cart'>
                <h2>Phone</h2>
                <p>{formData.phone}</p>
            </div>
            </Content>
            <div>
                 <Button title="Edit Profile" width="16rem" backgroundcolor='var(--medium-black)' fill='true' onclick={handleUpdateProfile}/>
           </div>
        </Container>
    );
};

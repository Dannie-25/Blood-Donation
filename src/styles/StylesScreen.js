import { StyleSheet } from 'react-native';

const StylesScreen = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 28,
    marginBottom: 2,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  errorText: {
    color: 'white',
    marginBottom: 16,
  },
  registerText: {
    marginTop: 16,
    color: '#666',
  },
  link: {
    color: '#3498db',
    textDecorationLine: 'underline',
  },
  sectionTitle: {
    fontSize: 20,
    marginTop: 16,
    marginBottom: 8,
    color: '#333',
  },
  postContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  postText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  userType: {
    color: '#3498db',
    fontStyle: 'italic',
  },
  buttonContainer: {
    color: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  postButton: {
    color: 'black',
    backgroundColor: '#3498db',
    padding: 8,
    borderRadius: 5,
    width: '48%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  buttonLogin: {
    color: '#800000'
  },

  //StylesWelcome

  containerWelcome: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#dc143c',
  },
  titleWelcome: {
    color: 'white',
    fontSize: 30,
    marginBottom: 2,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subtitleWelcome: {
    color: 'white',
    fontSize: 18,
    marginBottom: 18,
    fontWeight: 'bold',
  },
  textWelcome: {
    fontSize: 20,
    marginBottom: 2,
    fontWeight: 'bold',
  },

  //StylesRegister

  containerRegister: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,
    justifyContent: 'center',
    backgroundColor: '#dc143c',
  },
  titleRegister: {
    textTransform: 'uppercase',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 0,
    marginBottom: 20,
  },
  inputRegister: {
    marginBottom: 20,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  buttonRegister: {
    color: '#800000',
    marginTop: 20,
    borderRadius: 15,
    paddingHorizontal: 10,
    backgroundColor: '#FFD700',
  },


  //StylesRegisterForm
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#e4a0a1",
  },
  firstSection: {
    flex: 1,
    justifyContent: 'center',
    width: "100%",
    padding: 30,
  },
  secondSection: {
    backgroundColor: "#e4a0a1",
    flex: 1,
    width: "100%",
    padding: 30,
  },
  title1: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#4a0309',
    padding: 10
  },
  label: {
    fontSize: 15,
    color: "black",
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  space: {
    marginTop: 30
  },
  button: {
    backgroundColor: '#128C7E',
    padding: 25,
    alignItems: 'center',
    borderRadius: 50,
  },
  register: {
    color: "white",
    fontSize: 20,
    fontWeight: 'bold'
  },
  row: {
    marginBottom: 20,
  },
  field: {
    marginRight: 10,
    width: 100,
  },
  field1: {
    marginRight: 10,
    width: 150,
  },
  field2: {
    marginRight: 10,
    width: 70,
  },
  field3: {
    marginRight: 10,
    width: 70,
  },
  field4: {
    marginRight: 10,
    width: 100,
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default StylesScreen;

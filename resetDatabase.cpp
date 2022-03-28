#include <iostream>
#include <fstream> 
using namespace std;
int main() {
	
ofstream ofs;
ofs.open("../SQL_File/database.sql", ofstream::out |  ofstream::trunc);
ofs.close();
int x;
cout << "type anything and press enter";
    cin >> x;	
	cout << "successfully cleaned all SQL data. you may close this window"<< endl;

	cin >> x;
	cout << "";
	system("pause");
	return 0;
}


